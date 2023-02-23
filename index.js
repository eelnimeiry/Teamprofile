import { prompt } from "inquirer"
import Engineer from "./lib/Engineer"
import Intern from "./lib/intern"
import Manager from "./lib/Manager"
import { writeFileSync } from "fs"
import createHTML from "./utils/createHTML"
let mnagerDB = []
let engineerDB = []
let internDB = []


