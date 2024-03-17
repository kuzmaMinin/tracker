import { ITransferEntityDTO } from '@/entities/transportEntity';

export async function fetchTransportList(
  transportType = ''
): Promise<ITransferEntityDTO[]> {
  const response = await fetch(
    `http://10.0.2.2:3000/tracks?category=${transportType}`
  );
  return response.json();
}
