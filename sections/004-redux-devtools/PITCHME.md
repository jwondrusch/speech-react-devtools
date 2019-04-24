# Redux DevTools in Depth

---

## The Normal UI

![](assets/img/basic-redux-devtools.png)

Note:
- See a list of actions
- Use Inspector  at state and the diffs.
- Maybe I would peek at the chart.
- The end.

---

# The Ninja Way

Note:
- The Magic Toolbar
- Pause recording, lock changes, dispatchers, persist (for reloading), slider
- Use the slider to playback. Even set playback speed.

---

## Export State

![](assets/img/redux-save-state-to-file.gif)

Note:
- Useful for sharing state with team members.
- Not always great for sharing database-backed resources.

---

## Manually Trigger Actions

![](assets/img/redux-manual-actions.gif)

Note:
- Sanity checks for actions.
- Useful for hard to trigger actions like async or middleware.

---

## Create Tests from State

![](assets/img/redux-export-tests.gif)

Note:
- Creating tests can often be copy/paste, it's nice that redux devtools provides this.
- Extra nice that they provide ways to handle this in many different tools.

---

## Recording & Persistence Controls

![](assets/img/redux-recording-controls.gif)

Note:
- Use for creating very detailed histories.
- Test interactions without committing them.
- Persist on reload

---

## Hop in the Delorean

![](assets/img/redux-time-travel.gif)

Note:
- Useful for UX testing.
- Watch commits happen step by step.
- You can even control playback speed.

---?code=assets/code/redux-trace.js&title=Tracing Actions

Note:
- Action tracing is not on by default, it takes an additional step.
- Pass through your actionCreators and set `trace: true` in your devtools options

---

## Tracing Actions

![](assets/img/redux-action-tracing.gif)

Note:
- Takes additional setup, but worth it.
- Solves massive daily headaches.
- Useful for pinpointing the origin of an action, which can be hard when you use a lot of middleware or async.
