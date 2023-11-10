manager = new block.manager registry: ({ns, name, version, path, type}) ->
  if !version => version = \main
  if !path => path = "index.min.#{type or 'js'}"
  if ns == \local => return "/#name/#path"
  return "/assets/lib/#name/#version/#path"

view = new ldview do
  root: document.body
ldcv = new ldcover root: view.get(\ldcv), resident: true, in-place: true

manager.from {ns: \local, name: \block, path: "index.html"}, {root: view.get(\container)}
  .then (ret) ->
    ldcv.get!
    ret.interface.play!
