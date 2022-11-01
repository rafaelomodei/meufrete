import axios from 'axios';
import { config as envConfig } from 'dotenv';
import { AppError } from '../../errors/AppErrors';
import { ICreateRouteDTO } from '../../modules/route/dtos/ICreateRouteDTO';
envConfig();
const { env } = process;

interface IRouteDistanceMatrix {
  distance: number;
  originCity: string;
  destinationCity: string;
}

const DistanceMatrix = async (
  originCity: string,
  destinationCity: string
): Promise<IRouteDistanceMatrix> => {
  try {
    const request = {
      origins: originCity,
      destinations: destinationCity,
      departureTime: Date.now(),
      key: env.KEY_GOOGLE_DISTANCE_MATRIX,
      travelMode: 'DRIVING',
    };

    const { data } = await axios(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${request.origins}&destinations=${request.destinations}&departure_time=${request.departureTime}&key=${request.key}`
    );

    const route: IRouteDistanceMatrix = {
      distance: data.rows[0].elements[0].distance.value,
      originCity: data.origin_addresses[0].split(',')[0].split(' - ')[0],
      destinationCity: data.destination_addresses[0]
        .split(',')[0]
        .split(' - ')[0],
    };
    console.info('Olha quem está aqui: ', data);
    return route;
  } catch {
    throw new AppError('Deu ruim');
  }
};

export { DistanceMatrix };
