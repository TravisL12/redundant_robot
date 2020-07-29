function findWindowId(windows, nextId) {
  const ids = windows.map(({ id }) => id).sort();
  if (!ids.includes(nextId)) {
    return nextId;
  }
  for (let i = 0; i < ids.length; i++) {
    if (!ids.includes(ids[i] + 1)) {
      return ids[i] + 1;
    }
  }
  return ids[ids.length - 1] + 1;
}

export function orderWindows(windows = []) {
  return windows.reduce((acc, window, idx) => {
    const newId = window.hasOwnProperty("id")
      ? window.id
      : findWindowId([...windows, ...acc], idx);
    acc.push({
      ...window,
      id: newId,
      sort: window.sort || idx,
    });
    return acc;
  }, []);
}
