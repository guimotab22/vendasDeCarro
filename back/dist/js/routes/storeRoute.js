import express from "express";
import StoreController from "../controller/StoreController.js";
const storeRoute = express.Router();
storeRoute
    .get("/store/:storeId", StoreController.get)
    .get("/:slug", StoreController.getBySlug)
    .put("/store/:storeId", StoreController.put)
    .get("/store/all/company/:companyId", StoreController.getAllByIdCompany)
    .post("/store/create", StoreController.createStore)
    .delete(`/store/:id`, StoreController.delete);
export default storeRoute;
//# sourceMappingURL=storeRoute.js.map