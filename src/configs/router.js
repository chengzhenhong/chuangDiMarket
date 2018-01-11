import AdminLogin from '../backstagePages/Login.vue'
import AdminIndex from '../backstagePages/Index.vue'
import AdminScores from '../backstagePages/websiteSetting/AdminScores.vue'/*会员积分*/
import AdminShopInfoSet from '../backstagePages/websiteSetting/AdminShopInfoSetting.vue'/*商城信息设置*/
import AdminShopBannerSetting from '../backstagePages/websiteSetting/AdminShopBannerSetting.vue'/*首页轮播图设置*/
import AdminBannerAdd from '../backstagePages/websiteSetting/AdminBannerAdd.vue'/*新增首页轮播图*/
import AdminBannerEdit from '../backstagePages/websiteSetting/AdminBannerEdit.vue'/*编辑首页轮播图*/
import AdminMemberTypeSetting from '../backstagePages/websiteSetting/AdminMemberTypeSetting.vue'/*会员类型设置*/
import AdminMemberEdit from '../backstagePages/websiteSetting/AdminMemberEdit.vue'/*编辑会员类型*/
import AdminMemberAdd from '../backstagePages/websiteSetting/AdminmemberAdd.vue'/*新增会员信息*/
import AdminGoodsSetting from '../backstagePages/websiteSetting/AdminGoodsSetting.vue'/*商品版块设置*/
import AdminGoodsPlateEdit from '../backstagePages/websiteSetting/AdminGoodsPlatEdit.vue'/*商品板块编辑*/
import AdminGoodsPlateAdd from '../backstagePages/websiteSetting/AdminGoodsPlateAdd.vue'/*商品板块的添加*/
import AdminGoodsTypeSetting from '../backstagePages/websiteSetting/AdminGoodsTypeSetting.vue'/*商品类别设置*/
import AdminGoodsTypeAdd from '../backstagePages/websiteSetting/AdminGoodsTypeAdd.vue'/*商品类别的添加*/
import AdminGoodsTypeEdit from '../backstagePages/websiteSetting/AdminGoodsTypeEdit.vue'
import AdminNews from '../backstagePages/websiteSetting/AdminNews.vue'/*新闻公告*/
import AdminNewsAdd from '../backstagePages/websiteSetting/AdminNewsAdd.vue'/*新增新闻公告*/

/*网站管理*/
import GoodsApproval from '../backstagePages/websiteManagement/GoodsApproval.vue'/*商品审批*/
import MembershipGradeSetting from '../backstagePages/websiteManagement/MembershipGradeSetting.vue'/*会员等级设置*/
import PasswordSetting from '../backstagePages/websiteManagement/PasswordSetting.vue'/*会员密码设置*/
import BackSearchUserInfoList from '../backstagePages/websiteManagement/BackSearchUserInfoList.vue'/*后台查看会员*/
import BackOrderProcess from '../backstagePages/websiteManagement/BackOrderProcess.vue'/*后台处理订单*/
import BackGoodsList from '../backstagePages/websiteManagement/BackGoodsList.vue'/*后台查看商品*/

/*菜单权限*/
import MenuManager from '../backstagePages/menuPermissions/MenuManager.vue'/*菜单定义*/
import PermissionSet from '../backstagePages/menuPermissions/PermissionSet.vue'/*菜单权限设置*/

/*个人中心*/
import AdminPersonInfo from '../backstagePages/personCenter/personInfo.vue'/*个人信息*/

import Test from '../backstagePages/websiteSetting/test2.vue'
const routers = [
  {
    path:'/admin/login',
    component:AdminLogin
  },
  {
    path:'/admin/index',
    component:AdminIndex,
    redirect: '/admin/index/scores',
    children:[
      {
        path:'test' ,
        component:Test
      },
      /*个人中心*/
      {/*个人信息*/
        path:'personInfo',
        component:AdminPersonInfo
      },
      {/*会员积分*/
        path:'scores',
        component:AdminScores
      },
      {/*网站基本信息设置*/
        path:'shopInfo',
        component:AdminShopInfoSet
      },
      {/*首页轮播图设置*/
        path:'shopBanner',
        component:AdminShopBannerSetting
      },
      {/*新增首页轮播图*/
        path:"shopBannerAdd",
        component:AdminBannerAdd
      },
      {/*编辑首页轮播图*/
        path:'shopBannerEdit',
        component:AdminBannerEdit
      },
      {/*会员类型设置*/
        path:'userType',
        component:AdminMemberTypeSetting
      },
      {/*编辑会员*/
        path:'memberEdit',
        component:AdminMemberEdit
      },
      {/*新增会员*/
        path:'memberAdd',
        component:AdminMemberAdd
      },
      {/*商品板块设置*/
        path:'goodsPlate',
        component:AdminGoodsSetting
      },
      {/*商品板块编辑*/
        path:'goodsPlateEdit',
        component:AdminGoodsPlateEdit
      },
      {/*商品板块的添加*/
        path:'goodsPlateAdd',
        component:AdminGoodsPlateAdd
      },
      {/*商品类别设置*/
        path:'goodsTypeList',
        component:AdminGoodsTypeSetting
      },
      {/*商品类别的添加*/
        path:'goodsTypeAdd',
        component:AdminGoodsTypeAdd
      },
      {/*商品类别的编辑*/
        path:'goodsTypeEdit',
        component:AdminGoodsTypeEdit
      },
      {/*新闻公告*/
        path:'shopNews',
        component:AdminNews
      },
      {/*新增新闻公告*/
        path:'newsAdd',
        component:AdminNewsAdd
      },
      /*网站管理模块*/
      {/*商品审批*/
        path:'goodsManagerApprove',
        component:GoodsApproval
      },
      {/*会员等级设置*/
        path:'userTypeUpgrade',
        component:MembershipGradeSetting
      },
      {/*会员密码设置*/
        path:'userResetPass',
        component:PasswordSetting
      },
      {/*后台查看会员*/
        path:'backSearchUserInfoList',
        component:BackSearchUserInfoList
      },
      {/*后台处理订单*/
        path:'backOrderProcess',
        component:BackOrderProcess
      },
      {/*后台查看商品*/
        path:'backGoodsList',
        component:BackGoodsList
      },
      /*菜单权限*/
      {/*菜单定义*/
        path:'menuManager',
        component:MenuManager
      },
      {/*权限定义*/
        path:'permissionSet',
        component:PermissionSet
      }
    ]
  }
]

export default routers
