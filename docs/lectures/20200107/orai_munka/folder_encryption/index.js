// eslint-disable-next-line no-unused-vars
import fs from 'fs';
import { encode, decode } from '../secret/utils/index.js'

export function encodeAll(...files) {
    let result = {};
    files.forEach(file => {
        if (fs.existsSync(file) === false) {
            return result[file] = ''
        }
        if(fs.existsSync(file) === true){
            result[file] = encode(fs.readFileSync(file).toString())
        }
        



    })
    return result
}












export function decodeAll(...files) {
    let result = {};
    files.forEach(file => {
        if (fs.existsSync(file) == false) {
            return result[file] = ''
        }


        result[file] = decode(fs.readFileSync(file).toString())



    })
    return result

}