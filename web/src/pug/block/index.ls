module.exports =
  pkg: {}
  interface: -> @runner
  init: ->
    view = new ldview do
      root: document.body

    wrap = (t) ->
      h = Math.floor(t / 3600)
      m = Math.floor((t % 3600) / 60)
      s = t % 60
      [h,m,s].map(-> "#it".padStart(2, "0")).join(':')

    value = view.get(\value)

    runner = (o={}) ->
      @_sec = o.second
      @_t = {start: 0, paused: 0}
      @_running = false

      @
    runner.prototype = Object.create(Object.prototype) <<< do
      play: ->
        @_t.start = (@_t.start or 0) + Date.now! - (@_t.paused or 0)
        @_t.paused = 0
        @_running = true
        requestAnimationFrame((t) ~> @tick t)
      pause: ->
        @_running = false
        @_t.paused = Date.now!
      reset: (o = {}) ->
        @_t.start = @_t.paused = 0
        @_sec = if typeof(o) == \object => o.second else o
        @play!
      tick: (t) ->
        if !@_running => return
        requestAnimationFrame (t) ~> @tick t
        t = (@_sec - Math.floor((Date.now! - @_t.start) / 1000)) >? 0
        value.innerText = wrap t

    @runner = new runner second: 60

