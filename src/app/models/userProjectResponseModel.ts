import { ResponseModel } from "./responseModel";
import { UserProject } from "./userProject";

export interface UserProjectResponseModel extends ResponseModel{

    data:UserProject[];
}