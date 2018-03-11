"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_utils_1 = require("./fs-utils");
const path_1 = require("path");
const constants_1 = require("./constants");
const logger_1 = require("./logger");
class Params {
    constructor(mask, dest, sort, config) {
        this.mask = mask;
        this.dest = dest;
        this.sort = sort || constants_1.mainConst.defaultPriority;
        this.packageConf = config
            ? this.readJson(path_1.join(fs_utils_1.cwDir(), constants_1.mainConst.packageJsonFile))
            : {};
        this.bundleConf = config
            ? this.readJson(path_1.join(fs_utils_1.cwDir(), constants_1.mainConst.bundleConfFile))
            : {};
        this.mergedParams = this.mergeParam();
    }
    readJson(filePath) {
        if (fs_utils_1.isFile(filePath)) {
            return JSON.parse(fs_utils_1.readSync(filePath));
        }
        logger_1.logger(`${filePath} not found`);
        return {};
    }
    mergeParam() {
        const packageConf = this.packageConf.bundleScss
            ? this.packageConf.bundleScss
            : {};
        return Object.assign({ mask: this.mask, dest: this.dest, sort: this.sort }, packageConf, this.bundleConf);
    }
    get param() {
        return this.mergedParams;
    }
}
exports.Params = Params;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hlbHBlcnMvUGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQXFEO0FBQ3JELCtCQUE0QjtBQUM1QiwyQ0FBd0M7QUFDeEMscUNBQWtDO0FBR2xDO0lBVUUsWUFDRSxJQUE0QixFQUM1QixJQUFZLEVBQ1osSUFBNEIsRUFDNUIsTUFBZTtRQUVmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLHFCQUFTLENBQUMsZUFBZSxDQUFDO1FBQzlDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTTtZQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFJLENBQUMsZ0JBQUssRUFBRSxFQUFFLHFCQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNQLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTTtZQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFJLENBQUMsZ0JBQUssRUFBRSxFQUFFLHFCQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNQLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFTyxRQUFRLENBQUMsUUFBZ0I7UUFDL0IsRUFBRSxDQUFDLENBQUMsaUJBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxlQUFNLENBQUMsR0FBRyxRQUFRLFlBQVksQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRU8sVUFBVTtRQUNoQixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFDN0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUM3QixDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1AsTUFBTSxpQkFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksSUFDWixXQUFXLEVBQ1gsSUFBSSxDQUFDLFVBQVUsRUFDbEI7SUFDSixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztDQUNGO0FBcERELHdCQW9EQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN3RGlyLCBpc0ZpbGUsIHJlYWRTeW5jIH0gZnJvbSAnLi9mcy11dGlscyc7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgbWFpbkNvbnN0IH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XHJcbmltcG9ydCB7IElQYXJhbXMgfSBmcm9tICcuLi9pbnRlcmZhY2UvSVBhcmFtcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFyYW1zIHtcclxuICBwcml2YXRlIG1hc2s6IEFycmF5PHN0cmluZz4gfCBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBkZXN0OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBzb3J0OiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nO1xyXG4gIHByaXZhdGUgcGFja2FnZUNvbmY6IHtcclxuICAgIGJ1bmRsZVNjc3M/OiBJUGFyYW1zO1xyXG4gIH07XHJcbiAgcHJpdmF0ZSBidW5kbGVDb25mOiBJUGFyYW1zO1xyXG4gIHByaXZhdGUgbWVyZ2VkUGFyYW1zOiBJUGFyYW1zO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG1hc2s6IEFycmF5PHN0cmluZz4gfCBzdHJpbmcsXHJcbiAgICBkZXN0OiBzdHJpbmcsXHJcbiAgICBzb3J0OiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nLFxyXG4gICAgY29uZmlnOiBib29sZWFuXHJcbiAgKSB7XHJcbiAgICB0aGlzLm1hc2sgPSBtYXNrO1xyXG4gICAgdGhpcy5kZXN0ID0gZGVzdDtcclxuICAgIHRoaXMuc29ydCA9IHNvcnQgfHwgbWFpbkNvbnN0LmRlZmF1bHRQcmlvcml0eTtcclxuICAgIHRoaXMucGFja2FnZUNvbmYgPSBjb25maWdcclxuICAgICAgPyB0aGlzLnJlYWRKc29uKGpvaW4oY3dEaXIoKSwgbWFpbkNvbnN0LnBhY2thZ2VKc29uRmlsZSkpXHJcbiAgICAgIDoge307XHJcbiAgICB0aGlzLmJ1bmRsZUNvbmYgPSBjb25maWdcclxuICAgICAgPyB0aGlzLnJlYWRKc29uKGpvaW4oY3dEaXIoKSwgbWFpbkNvbnN0LmJ1bmRsZUNvbmZGaWxlKSlcclxuICAgICAgOiB7fTtcclxuICAgIHRoaXMubWVyZ2VkUGFyYW1zID0gdGhpcy5tZXJnZVBhcmFtKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWRKc29uKGZpbGVQYXRoOiBzdHJpbmcpIHtcclxuICAgIGlmIChpc0ZpbGUoZmlsZVBhdGgpKSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHJlYWRTeW5jKGZpbGVQYXRoKSk7XHJcbiAgICB9XHJcbiAgICBsb2dnZXIoYCR7ZmlsZVBhdGh9IG5vdCBmb3VuZGApO1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtZXJnZVBhcmFtKCk6IElQYXJhbXMge1xyXG4gICAgY29uc3QgcGFja2FnZUNvbmYgPSB0aGlzLnBhY2thZ2VDb25mLmJ1bmRsZVNjc3NcclxuICAgICAgPyB0aGlzLnBhY2thZ2VDb25mLmJ1bmRsZVNjc3NcclxuICAgICAgOiB7fTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1hc2s6IHRoaXMubWFzayxcclxuICAgICAgZGVzdDogdGhpcy5kZXN0LFxyXG4gICAgICBzb3J0OiB0aGlzLnNvcnQsXHJcbiAgICAgIC4uLnBhY2thZ2VDb25mLFxyXG4gICAgICAuLi50aGlzLmJ1bmRsZUNvbmYsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhcmFtKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWVyZ2VkUGFyYW1zO1xyXG4gIH1cclxufVxyXG4iXX0=