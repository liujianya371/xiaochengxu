// components/commentList/component/item.js
const log = require("../../utils/log.js")
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    comment:{
      type:Object,
      value:{},
      observer:function(c){
        // log.info("comment",c);
      }
    },
    index:{
      type:Number,
      value:0,
      observer:function(c){
        // log.info("comment index",c);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(e){
      this.triggerEvent("onItemClick",
      { comment: e.currentTarget.dataset.comment ,
        parentIndex:this.data.index},
      { bubbles: true, composed: true });
    },
    handlerPreLoadSub(e){
      log.info("handlerPreLoadSub", e);
      this.triggerEvent("onPreLoadSubItemClick",
        { comment: e.currentTarget.dataset.comment,
          parentIndex: e.currentTarget.dataset.parentindex },
        { bubbles: true, composed: true });
    },
    handlerLoadMoreSub(e){
      log.info("handlerLoadMoreSub", e);
      this.triggerEvent("onLoadMoreSubItemClick",
        { comment: e.currentTarget.dataset.comment,
          parentIndex:e.currentTarget.dataset.parentindex},
        { bubbles: true, composed: true });
    },
    handlerSubItemClick(e){
      log.info("handlerSubItemClick",e);
      // bailu 修改，增加当前子评论的父评论（一级）的评论ID和用户ID，方便回复子评论时使用
      let currentItem = e.currentTarget.dataset.comment;
      let parentItemUserId = e.currentTarget.dataset.parentuserid;
      currentItem.parentUserId = parentItemUserId;
      let parentIndex = e.currentTarget.dataset.parentindex;
      this.triggerEvent("onSubItemClick",
        { comment: currentItem,
          parentIndex
         },
        { bubbles: true, composed: true });
    },

    handleItemLike(e){
      this.triggerEvent("handleItemLike",
        {
          comment: e.currentTarget.dataset.comment,
          parentIndex: this.data.index
        },
        { bubbles: true, composed: true });
    }
  }
})
