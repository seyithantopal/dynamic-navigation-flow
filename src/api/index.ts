import { AxiosResponse } from 'axios';
import axiosInstance from './mocks';

export const getRLoginApi = async (): Promise<AxiosResponse<any, any>> => {
  return await axiosInstance.get('rLogin');
};

export const getRFetchExperimentsApi = async (): Promise<
  AxiosResponse<any, any>
> => {
  return await axiosInstance.get('rFetchExperiments');
};
