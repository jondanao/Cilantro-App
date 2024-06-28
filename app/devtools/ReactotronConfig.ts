import Reactotron from "reactotron-react-native";
import { mst } from "reactotron-mst";

const reactotron = Reactotron.configure({
    name: require("../../package.json").name,
    onConnect: () => {
        Reactotron.clear();
    },
}).use(
    mst({
        /** ignore some chatty `mobx-state-tree` actions  */
        filter: (event) =>
            /postProcessSnapshot|@APPLY_SNAPSHOT/.test(event.name) === false,
    })
);

reactotron.connect();
export default reactotron;
