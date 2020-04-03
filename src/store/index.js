import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import createStore from "./createStore";
import persistReducer from "./persistReducer";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware({});

const middleWares = [sagaMiddleware];

const store = createStore(persistReducer(rootReducer), middleWares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
