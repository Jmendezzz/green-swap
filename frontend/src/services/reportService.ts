import { CreateReportDTO } from "@/domain/report/CreateReportDTO";
import { axiosInstace } from "./axiosConfig";
import { AxiosResponse } from "axios";

const REQUEST_MAPPING = '/reports';

export function reportUserService(report:CreateReportDTO , userId: string): Promise<AxiosResponse<string>> {
  return axiosInstace.post(`${REQUEST_MAPPING}/report/${userId}`,report);
}