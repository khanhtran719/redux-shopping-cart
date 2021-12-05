import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Header from "./components/Header";

import { Provider } from "react-redux";
import { store } from "./stores/index";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
