import React from "react";
import "./App.css";

import NavBar from "./components/NavBar.js";
import Masthead from "./components/Masthead.js";
import About from "./components/About.js";
import Testimonials from "./components/Testimonials.js";
import Events from "./components/Events.js";
import Speakers from "./components/Speakers.js";
import Sponsors from "./components/Sponsors.js";
import Team from "./components/Team.js";
import Contact from "./components/Contact.js";
import Conference from "./components/Conference2020/Conference.js";
import Conf2021 from "./components/Conference2021/MainComponent/Conf2021";
import Conf2022 from "./components/Conference2022/Conf22.js";

import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import Weekend2022 from "./components/Weekend2022/weekend2022";
import ITDep from "./components/ITDep"
import MarketingDep from "./components/MarketingDep"
import SpeakersDep from "./components/SpeakersDep"
import SponsorshipDep from "./components/SponsorshipDep"
import LandingPage from "./components/LandingPage"

function StartUpApp({ lang }) {
	return (
		<>
			<NavBar lang={lang} />
			<Masthead lang={lang} />
			<About lang={lang} />
			<Events lang={lang} />
			<Speakers lang={lang} />
			<Sponsors lang={lang} />
			<Team lang={lang} />
			<Testimonials lang={lang} />
			<Contact lang={lang} />
		</>
	);
}

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/en">
						<StartUpApp lang="en" />
					</Route>

					<Route path="/bg">
						<StartUpApp lang="bg" />
					</Route>

					<Route path="/conference2020">
						<Conference />
					</Route>

					<Route path="/conference2021">
						<Conf2021 />
					</Route>

					<Route path="/weekend2022">
						<Weekend2022 />
					</Route>

					<Route path="/it">
						<ITDep />
					</Route>

					<Route path="/marketing">
						<MarketingDep />
					</Route>

					<Route path="/speakers">
						<SpeakersDep />
					</Route>

					<Route path="/sponsorship">
						<SponsorshipDep />
					</Route>

					<Route path="/recruitment2022">
						<LandingPage />
					</Route>

					<Route path="/conference2022">
						<Conf2022 />
					</Route>


					{/*<Route path="/apply" component={Apply} />*/}

					<Route path="/apply">
						<Redirect to="/en" />
					</Route>

					<Route exact path="/">
						<Redirect
							to={"/" + (localStorage.getItem("lang") ?? "en")}
						/>
					</Route>

					<Route>
						<div className="container text-center">
							<div className="row" style={{ height: "100vh" }}>
								<div className="col-sm my-auto">
									<h1>Page Not Found :(</h1>
									<Link to="/en">
										<h2>Back To Home</h2>
									</Link>
								</div>
							</div>
						</div>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
