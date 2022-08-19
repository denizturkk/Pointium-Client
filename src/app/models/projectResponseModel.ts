import { Project } from "./project";
import { ResponseModel } from "./responseModel";

export interface ProjectResponseModel extends ResponseModel{
    data:Project[];
}