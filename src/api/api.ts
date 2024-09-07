import { GetDetails } from "../_generated-openapi/GetDetails";
import { Search } from "../_generated-openapi/Search";

export const getDetailsClient = new GetDetails({ baseUrl: process.env.REACT_APP_BACKEND_BASE_URL});
export const searchClient = new Search({ baseUrl: process.env.REACT_APP_BACKEND_BASE_URL});
