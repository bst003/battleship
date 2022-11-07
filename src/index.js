import "./assets/scss/styles.scss";
import "./assets/scss/modal.scss";

import MicroModal from "micromodal";

import { Gameloop } from "./modules/gameloop";
import { domFunctions } from "./modules/domStuff";
import { reusedMethods } from "./modules/reusedMethods";
import { pubsub } from "./modules/pubsub";

pubsub.publish("startGame");
MicroModal.init();
