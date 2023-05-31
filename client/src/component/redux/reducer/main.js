import { getproductreducer } from "./Productreducer";
import{combineReducers} from "redux";

const rootreducer = combineReducers({
    getproductsdata:getproductreducer
});

export default rootreducer;