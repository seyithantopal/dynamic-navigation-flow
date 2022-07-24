import { AxiosResponse } from 'axios';
import instance from './mocks';

export const getRLoginApi = async (): Promise<AxiosResponse<any, any>> => {
  return await instance.get('rLogin');
};

export const getRFetchExperimentsApi = async (): Promise<
  AxiosResponse<any, any>
> => {
  return await instance.get('rFetchExperiments');
};
