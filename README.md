# rx-redux
借助于redux可以很好的实现页面状态化，从而实现业务数据和展示层的解耦。

> redux的三大原则：
 1. 单一数据源
 2. State 是只读的
 3. 使用纯函数来执行修改

 rxjs在管理数据状态上具有绝对优势，通过subscribe订阅到单一数据源，同时可以获取到为observable的state对象，这在ng2中及其重要。