import React from 'react';

import styles from './board.module.scss';
import Tile, {TileProps} from '../tile/Tile';
import { TileType } from '../../types/types';

const Board = () => {

    const tiles: Array<TileType> = [...Array(64)]
    const startColor = "gray"
    const alternateColor = "white";
    let colorSwitchGray = false;
    let row = 9;

    const determineBackgroundColor = (index: number) : string => {
        if(index % 8 == 0){
            row--;
            colorSwitchGray=!colorSwitchGray
        }
        return colorSwitchGray ? startColor:alternateColor;
    }

    const file = (index: number) : string => {
        const col = index % 8;
        switch(col){
            case 0: return "A";
            case 1: return "B";
            case 2: return "C";
            case 3: return "D";
            case 4: return "E";
            case 5: return "F";
            case 6: return "G";
            case 7: return "H";
        }
        return ""
    }

    return(
        <div className={styles.board}>
            {tiles.map((t, index) => {
                colorSwitchGray=!colorSwitchGray;
                return <Tile 
                    key={index} 
                    color={determineBackgroundColor(index)}
                    row={row}
                    file={file(index)}
                />
            })}
        </div>
    )
}


export default Board;