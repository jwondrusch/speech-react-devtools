# Profiling with React DevTools

![Profiler](assets/img/react-profiler-1.png)

Note:
- New as of React 16.5, You may need to update.
- Profiling is about 6-8 months old.
- Under the hood, it's using Time slicing and Suspense

---

## Getting Started with Profiling

![Getting Started](assets/img/basic-profiler.gif)

Note:
- Getting started is very easy.
- There are two tabs in the profiler, visuals and commit data.
- Visuals are a flame graph or a ranked chart.
  - Can turn on or off native element handling.
- Commit data gives information such as when it was committed and the render duration.
- Open React Devtools, click on Profiler, start recording.
- How to read the flame chart.

---

## More Detailed Example

![Getting Started](assets/img/drilling-deeper.gif)

Note:
- Using a more advanced example.  Set up redux, many more renders.
- Did 4-5 things, 20+ commits.
- Use the navigator to scroll through the history of your recorded actions.
- View a component chart, lets you see what the most and least expensive items in the render were.  If an item was not rendered, can't view component chart.
- Adds up quickly, so be deliberate in your recordings.

---

## Problem Solving with Profiling

<ul>
<li>Find slow components.</li>
<li>Find a component being rendered too often.</li>
<li>See state and prop changes that trigger re-renders.</li>
<li>See what changes on a per-commit basis.</li>
</ul>

Note:
- Use render times to see what's rendering slowly.
- Use render coutns to see what renders too often.
- Use state/prop changes to see what triggered the change.
- See what portions of the DOM change on each render.

---

## The Future of Profiling

<ul>
<li>Interactions</li>
<li>`performance.now()`, `trace` and `wrap`</li>
<li>Still experimental, subject to change.</li>
</ul>

Note:
- Interactions are unstable (subject to change), but allow you to trace events or interactions.
- Provide better timing data such as "what caused a slow commit" or "how long does it take for an interaction to update the DOM"
- `trace` for sync, `wrap` for async.