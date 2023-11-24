/* eslint-disable */
/**
 * 检查权限
 * @param loginUser 当前登录用户
 * @param needAccess 需要有的权限
 * @return boolean 有无权限
 * */
import accessEnum from "@/access/accessEnum";
//获取当前用户具有的权限

const checkAccess = (loginUser: any, needAccess = accessEnum.NOT_LOGIN) => {
    const loginUserAccess = loginUser?.userRole ?? accessEnum.NOT_LOGIN;
    if (needAccess === accessEnum.NOT_LOGIN) {
        return true;
    }

    if (needAccess === accessEnum.USER) {
        //如果用户没登陆，那么表示无权限
        if (loginUserAccess === accessEnum.NOT_LOGIN) {
            return false;
        }
    }
    // 仅管理员权限
    if (needAccess === accessEnum.ADMIN) {
        if (loginUserAccess !== accessEnum.ADMIN) {
            return false;
        }
    }
    return true;
};
export default checkAccess;
