import fetch from 'isomorphic-unfetch';
import {ApiUrl} from "../config";

export const fetcher = async (url)=> {const res = await fetch(ApiUrl + url); return await res.json()};
export const Rorphans = ({children,number=2})=>{
    const words = children.split(' ');
    return <>{words.map((word, i) => word + (i > words.length-(number+1) ? '\u00a0' :  ' ')).join('')}</>
};
