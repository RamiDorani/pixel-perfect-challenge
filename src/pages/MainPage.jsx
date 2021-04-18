import React from 'react';
import { Header } from '../cmp/Header';
import { Enjoyable } from '../cmp/Enjoyable';
import { MostLocaly } from '../cmp/MostLocaly';
import { HighLigths } from '../cmp/HighLigths';
import { Activities } from '../cmp/Activities';
import { Ready } from '../cmp/Ready';


export function MainPage() {
    return (
        <div>
            <Header />
            <Enjoyable />
            <MostLocaly />
            <HighLigths />
            <Activities />
            <Ready />
        </div>
    )
}
