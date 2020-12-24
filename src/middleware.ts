/*
 * @Description:
 * @Usage:
 * @Author: xxx
 * @Date: 2020-12-24 10:32:06
 * @LastEditTime: 2020-12-24 14:53:17
 */
import * as Koa from 'koa';
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

/**
 *
 *
 * @export
 * @param {OptionsInterface} options
 * @param {Application} app
 * @returns {*}  {Koa.Middleware}
 */
export function <projectName>(options: OptionsInterface, app: Application): Koa.Middleware {
    const opt = { ...defaultOptions, ...options };
    // todo


    return async (ctx: Koa.Context, next: Koa.Next) => {
        // todo
        return next();
    }
}