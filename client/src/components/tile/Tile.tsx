import React from 'react';

import styles from './tile.module.scss';

export interface TileProps{
    color: string;
    row: number;
    file: string;
}

const Tile = (props: TileProps) => {

    const fileLabel = () : JSX.Element => {
        if(props.row == 1)
            return <div className={[styles.label, styles.fileLabelA].join(" ")}>{props.file}</div>
        else if (props.row == 8)
            return <div className={[styles.label, styles.fileLabelH].join(" ")}>{props.file}</div>
        return <span></span>
    }

    const rowLabel = () : JSX.Element => {
        if(props.file == "A")
            return <div className={[styles.label, styles.rowLabel1].join(" ")}>{props.row}</div>
        if(props.file == "H")
            return <div className={[styles.label, styles.rowLabel8].join(" ")}>{props.row}</div>            
        return <span></span>;
    }

    return(
        <div className={styles.tile} 
            style={{background: props.color}} 
            data-row={props.row} 
            data-file={props.file} 
            data-tile={props.file +""+props.row}>
                {rowLabel()}
                {fileLabel()}
            
            </div>
    )
}


export default Tile;