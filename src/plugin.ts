/*
 * @Description:
 * @Usage:
 * @Author: xxx
 * @Date: 2020-12-24 10:32:14
 * @LastEditTime: 2021-11-20 01:42:46
 */
import { Koatty, Logger, Helper } from "koatty";

/**
 * Koatty Application
 *
 * @export
 * @interface Application
 */
export interface Application extends Koatty {

}

/**
 *
 *
 * @interface OptionsInterface
 */
interface OptionsInterface {
    // todo

}

/**
 * default options
 */
const defaultOptions: OptionsInterface = {
    // todo

};

export function FUNCTION_NAMEPlugin(options: OptionsInterface, app: Application): Promise<any> {
    // todo
    const opt = { ...defaultOptions, ...options };

    return Promise.resolve();
}