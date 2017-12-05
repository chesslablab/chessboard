/**
 * Author: shaack
 * Date: 03.12.2017
 */

import {Test} from "../node_modules/svjs-test/src/svjs/Test.js"
import {Chessboard} from "../src/cm-chessboard/Chessboard.js";

export class TestBoard extends Test {

    testCreateAndRemove() {
        const chessboard = new Chessboard(document.getElementById("testboard1"), {
            position: "start"
        }, () => {
            setTimeout(() => {
                Test.assertEquals(1, chessboard.view.containerElement.childNodes.length);
                chessboard.remove();
                Test.assertEquals(0, chessboard.view.containerElement.childNodes.length);
            });

        });
    }

}