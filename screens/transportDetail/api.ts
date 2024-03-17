import { IDriver } from '@/entities/driverEntity';

export async function fetchDriverById(id: string): Promise<IDriver[]> {
  const response = await fetch(`http://10.0.2.2:3000/drivers?id=${id}`);
  return response.json();
}
