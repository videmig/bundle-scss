"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const fs_utils_1 = require("./fs-utils");
const path_1 = require("path");
exports.removeImports = (content) => content.replace(constants_1.config.sassImportRegex, '');
exports.getUniqueScss = (files) => {
    const scssImports = files
        .map(file => {
        let baseDir = path_1.dirname(file);
        return exports.getImports(fs_utils_1.readSync(file), baseDir);
    })
        .reduce((acc, curr) => acc.concat(curr), []);
    const allImports = [...scssImports, ...files];
    return [...new Set(allImports)];
};
exports.getImports = (content, baseDir, imports = []) => {
    let match;
    while ((match = constants_1.config.sassImportRegex.exec(content)) !== null) {
        const pathFile = fs_utils_1.defineExtension(path_1.join(baseDir, match[1]));
        if (!imports.some(el => el === pathFile)) {
            imports.push(pathFile);
            exports.getImports(fs_utils_1.readSync(pathFile), path_1.dirname(pathFile), imports);
        }
    }
    return imports;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1jb250ZW50LXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hlbHBlcnMvZmlsZS1jb250ZW50LXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXFDO0FBQ3JDLHlDQUF1RDtBQUN2RCwrQkFBcUM7QUFFeEIsUUFBQSxhQUFhLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRSxDQUMvQyxPQUFPLENBQUMsT0FBTyxDQUFDLGtCQUFNLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRWpDLFFBQUEsYUFBYSxHQUFHLENBQUMsS0FBb0IsRUFBRSxFQUFFO0lBQ3BELE1BQU0sV0FBVyxHQUFHLEtBQUs7U0FDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ1YsSUFBSSxPQUFPLEdBQUcsY0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxrQkFBVSxDQUFDLG1CQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQyxDQUFDO1NBQ0QsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQyxNQUFNLFVBQVUsR0FBRyxDQUFDLEdBQUcsV0FBVyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFFOUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLENBQUMsQ0FBQztBQUVXLFFBQUEsVUFBVSxHQUFHLENBQ3hCLE9BQWUsRUFDZixPQUFlLEVBQ2YsVUFBeUIsRUFBRSxFQUMzQixFQUFFO0lBQ0YsSUFBSSxLQUFLLENBQUM7SUFDVixPQUFPLENBQUMsS0FBSyxHQUFHLGtCQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQy9ELE1BQU0sUUFBUSxHQUFHLDBCQUFlLENBQUMsV0FBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QixrQkFBVSxDQUFDLG1CQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsY0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdELENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGRlZmluZUV4dGVuc2lvbiwgcmVhZFN5bmMgfSBmcm9tICcuL2ZzLXV0aWxzJztcclxuaW1wb3J0IHsgZGlybmFtZSwgam9pbiB9IGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUltcG9ydHMgPSAoY29udGVudDogc3RyaW5nKSA9PlxyXG4gIGNvbnRlbnQucmVwbGFjZShjb25maWcuc2Fzc0ltcG9ydFJlZ2V4LCAnJyk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VW5pcXVlU2NzcyA9IChmaWxlczogQXJyYXk8c3RyaW5nPikgPT4ge1xyXG4gIGNvbnN0IHNjc3NJbXBvcnRzID0gZmlsZXNcclxuICAgIC5tYXAoZmlsZSA9PiB7XHJcbiAgICAgIGxldCBiYXNlRGlyID0gZGlybmFtZShmaWxlKTtcclxuICAgICAgcmV0dXJuIGdldEltcG9ydHMocmVhZFN5bmMoZmlsZSksIGJhc2VEaXIpO1xyXG4gICAgfSlcclxuICAgIC5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjLmNvbmNhdChjdXJyKSwgW10pO1xyXG4gIGNvbnN0IGFsbEltcG9ydHMgPSBbLi4uc2Nzc0ltcG9ydHMsIC4uLmZpbGVzXTtcclxuXHJcbiAgcmV0dXJuIFsuLi5uZXcgU2V0KGFsbEltcG9ydHMpXTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJbXBvcnRzID0gKFxyXG4gIGNvbnRlbnQ6IHN0cmluZyxcclxuICBiYXNlRGlyOiBzdHJpbmcsXHJcbiAgaW1wb3J0czogQXJyYXk8c3RyaW5nPiA9IFtdXHJcbikgPT4ge1xyXG4gIGxldCBtYXRjaDtcclxuICB3aGlsZSAoKG1hdGNoID0gY29uZmlnLnNhc3NJbXBvcnRSZWdleC5leGVjKGNvbnRlbnQpKSAhPT0gbnVsbCkge1xyXG4gICAgY29uc3QgcGF0aEZpbGUgPSBkZWZpbmVFeHRlbnNpb24oam9pbihiYXNlRGlyLCBtYXRjaFsxXSkpO1xyXG4gICAgaWYgKCFpbXBvcnRzLnNvbWUoZWwgPT4gZWwgPT09IHBhdGhGaWxlKSkge1xyXG4gICAgICBpbXBvcnRzLnB1c2gocGF0aEZpbGUpO1xyXG4gICAgICBnZXRJbXBvcnRzKHJlYWRTeW5jKHBhdGhGaWxlKSwgZGlybmFtZShwYXRoRmlsZSksIGltcG9ydHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGltcG9ydHM7XHJcbn07XHJcblxyXG4iXX0=