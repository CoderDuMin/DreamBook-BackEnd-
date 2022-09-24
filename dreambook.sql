/*
Navicat MySQL Data Transfer

Source Server         : 远程数据库-北京
Source Server Version : 50718
Source Host           : bj-cynosdbmysql-grp-oo8ksk5a.sql.tencentcdb.com:25004
Source Database       : dreambook

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2022-09-24 16:34:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for dream
-- ----------------------------
DROP TABLE IF EXISTS `dream`;
CREATE TABLE `dream` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `type` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `isPublic` int(11) NOT NULL,
  `wakeTime` datetime NOT NULL,
  `createTime` datetime NOT NULL,
  `editTime` datetime NOT NULL,
  `content` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(255) NOT NULL,
  `account` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
