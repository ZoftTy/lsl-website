## Mac 命令
### Apache:
```sh
-- 重启apache：
sudo apachectl restart

-- 关闭apache：
sudo apachectl stop

-- 开启apache：
sudo apachectl start
```

### MySQL:
```shell
-- 启动MySQL
mysql.server start

-- 关闭MySQL
mysql.server stop
-- 重启MySQL
mysql.server restart
```

### 显示/隐藏文件夹：

```sh
-- 隐藏文件/文件夹
chflags hidden abc
-- 显示文件/文件夹
chflags nohidden abc

```

### Samba

```shell
-- 启动Samba
/sbin/service smb restart
-- 查看Samba服务的状态
/sbin/service smb status
```
### 挂载磁盘

```shell
 sudo mount -t ntfs -o rw,auto,nobrowse /dev/disk2s1 /data/mydisk/
```

### 新建测试文件

```shell
sudo dd if=/dev/zero of=test bs=1m count=1000
```

## CentOS 7
### 网络配置
```shell
nmtui edit `网卡名称`
```
### DNS设置
<https://www.cnblogs.com/dadadechengzi/p/6670530.html>

### 挂载 smb

```shell
sudo mount.cifs smb地址 挂载地址 -o user=用户名,pass=密码..,port=端口
```