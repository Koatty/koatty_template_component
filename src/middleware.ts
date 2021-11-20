/*
 * @Description:
 * @Usage:
 * @Author: xxx
 * @Date: 2020-12-24 10:32:06
 * @LastEditTime: 2021-11-21 00:32:06
 */
import Koa from "koa";
import { Koatty, Logger, Helper, KoattyContext } from "koatty";


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
export function _CLASS_NAME(options: OptionsInterface, app: Koatty): Koa.Middleware {
    const opt = { ...defaultOptions, ...options };
    // todo

    return async (ctx: KoattyContext, next: Koa.Next) => {
        // todo
        return next();
    }
}