/*
 * @Description:
 * @Usage:
 * @Author: xxx
 * @Date: 2020-12-24 10:32:14
 * @LastEditTime: 2020-12-24 10:38:38
 */
import * as helper from "koatty_lib";
import { DefaultLogger as logger } from "koatty_logger";


/**
 * Koatty Application
 *
 * @export
 * @interface Application
 */
export interface Application {
    config(propKey: string, type: string): any;
    on(event: string, callback: () => void): any;
    once(event: string, callback: () => void): any;
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

export default function (options: OptionsInterface, app: Application): Promise<any> {
    // todo

    return Promise.resolve();
}