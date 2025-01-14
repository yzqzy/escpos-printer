const { Printer, Command } = require('../index')

let printer = new Printer()
let cmd = new Command({ printeWidth: '58mm' })

async function f() {
  //菜单
  cmd
    .fontSize(1)
    .textCenter('菜单打印测试', ' ')
    .newLine(4)
    .fontSize()
    .textRow(['菜名', '数量', '小计'])
    .text('_'.repeat(32))
    .newLine(2)
    .textRow(['香辣花甲', 'x2', '￥32.00'])
    .textRow(['香浓猪骨汤', 'x1', '￥14.00'])
    .textRow(['杭椒炒肉', 'x1', '￥39.00'])
    .textRow(['紫菜蛋花汤', 'x2', '￥8.00'])
    .newLine(1)
    .text('_'.repeat(32))
    .newLine(2)
    .text('小计：198.01')
    .newLine()
    .text('实收：198.00')
    .newLine(2)
    .fontSize(1)
    .textCenter('取餐号：13456')
    .fontSize()
    .newLine(5)

    //条码
    .textCenter('条码打印测试(EAN-13)')
    .newLine()
    .barcode('123456789012')
    .newLine(5)

    //二维码
    .textCenter('二维码打印测试')
    .newLine()
  await cmd.qrcode('hello lilin!')
  cmd.newLine(2)

  //图片，请自己引入图片资源
  // cmd.textCenter("位图测试")
  // .newLine();
  // await cmd.image("./pikaqiu58mm.png");
  // cmd.newLine(5)
  // .cut();

  await printer.write(cmd.export())
}

!(async function () {
  await f()
  console.log('打印完毕')
  printer.destroy()
})()
