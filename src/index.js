import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login/Login';
import City from './components/City/City';
import Main from './components/Main/Main';
import { CookiesProvider } from 'react-cookie';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
ReactDOM.render(
    <CookiesProvider>
        <Router>
            {/* <header class="bg-gray-900">
                    <div class="flex items-center justify-between px-4 py-3">
                        <div class="flex flex-row items-center justify-center" >
                            <img class="h-12" src="/cooking.png" alt="Workcation" />
                            <span class="text-gray-300 ml-5 font-semibold uppercase">
                                Caserimetro</span>
                            <div>
                                <button type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                        <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                        <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4">

                            <a href="#" class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Ajustes</a>
                            <a href="#" class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Cerrar sesion</a>
                        </div>
                    </div>
                </header> */}

            <div id="app" class="bg-gray-300 antialiased ">
                <div class="bg-gray-200">
                    <header class="bg-gray-900">
                        <div class="flex items-center justify-between px-4 py-3">
                            <div class="flex flex-row items-center justify-center" >
                                <img class="h-12" src="/cooking.png" alt="Workcation" />
                                <span class="text-gray-300 ml-5 font-semibold uppercase">
                                    Caserimetro
        </span>

                            </div>
                            <div>
                                <button type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                        <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                        <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="block" class="px-2 pt-2 pb-4">

                            <a href="#" class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Ajustes</a>
                            <a href="#" class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Cerrar sesion</a>
                        </div>
                    </header>
                </div>
                <div class="flex bg-gray-100">
                    <div class="px-8 py-12 max-w-sm mx-auto sm:max-w-xl lg:w-1/2 lg:max-w-full lg:py-24 lg:px-24">
                        <div class="xl:max-w-lg xl:ml-auto">
                            <Route exact path="/" component={Main} />
                            <Route path="/app">
                                <App rrr={{ city: "la paz" }} array={[1, 2, 3]} tgt={2 + 3} text="jose" TEXT2="Hose3" />
                            </Route>
                            <Route path="/login" component={Login} />
                            <Route path="/cities" component={City} />
                        </div>
                    </div>
                </div>
            </div>
        </Router >
    </CookiesProvider >
    ,
    document.getElementById('root')
);

