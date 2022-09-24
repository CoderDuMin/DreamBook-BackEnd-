# DreamBook-BackEnd

这里是记梦谷的服务端

## 什么是记梦谷

你可以把它当成一个类似于博客的东西,在这里,你能够每天记录你的梦境,梦境往往是无厘头超乎现实的,美梦、自然梦、超自然梦、噩梦。。。但往往在我们醒来之后，却会很快的忘记它。

那么为什么不试着记住我们的梦呢？

记录梦境有利于提升我们的想象力、逻辑感，加强我们的梦感，长此以往，我们也能够触及到***清明梦(具体是什么可以点[这里](https://baike.baidu.com/item/%E6%B8%85%E9%86%92%E6%A2%A6/1208702?fromtitle=%E6%B8%85%E6%98%8E%E6%A2%A6&fromid=3141722&fr=aladdin)了解)***

由此,记梦谷就这么诞生了!!!

## 记梦谷可以做什么

* 记录下你每一次的梦境,无论是美梦、噩梦、超自然梦，还是那些难以启齿的梦
* 在记梦广场，你也可以看到由别人选择公开出来的梦境。 --看看别人做了什么梦也会有意思，对吗？
* 对自己所做过的梦境进行统计分析，了解自己。
* ps：更多功能还在开发中，等待后续更新。。。

## 使用技术栈

一个使用 KOA2 + Typeorm + mysql +jwt 搭建的记梦谷服务端

## 使用说明

#### **安装依赖**

进入项目然后安装依赖

在终端中输入

`cd DreamBook-BackEnd && npm install`

#### **配置sql连接**

在ormconfig.json中配置你的数据库

```
{
  "type": "mysql",
  "host": "输入你的主机地址",
  "port": 3306,
  "username": "root",
  "password": "123456",
  "database": "dreambook",
  "synchronize": true,
  "entities": ["src/entity/*.ts"],
  "cli": {
    "entitiesDir": "src/entity"
  }
}
```

#### 创建对应数据库以及表

执行项目下的dreambook.sql来安装数据库

#### 启动

使用npm或yarn来启动项目

在终端中输入 `npm start 或者yarn start`
