const serviceModule = {
  adminMenuList: {/*后台左侧菜单加载*/
    url: 'MenuList'
  },
  adminBannerList: {/*首页轮播图加载*/
    url: 'BannerList'
  },
  adminMemberType:{/*会员类型设置*/
    url:'MemberList'
  },
  adminGoodsPlate:{/*商品板块设置*/
    url:'GoodsPlateList'
  }
}
const ApiSetting = { ...serviceModule }

export default ApiSetting
