/*
 * @Description:
 * @Usage:
 * @Author: xxx
 * @Date: 2020-12-24 10:32:06
 * @LastEditTime: 2021-07-13 10:33:52
 */
import { Koatty, Logger, Helper, KoattyContext, KoattyNext } from "koatty";


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
export function <ClassName>(options: OptionsInterface, app: Koatty): Koa.Middleware {
    const opt = { ...defaultOptions, ...options };
    // todo


    return async (ctx: KoattyContext, next: KoattyNext) => {
        // todo
        return next();
    }
}