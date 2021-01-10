## Output

Each Algorithm must output the results in a config map. To make it easier, import
the [`output_result`](common/output_result.py) function, it will handle outputing the
results in the appropriated way.

The scheduler-manager expects the output in a config map with the name of the
job + the suffix "-result".

## Algorithm Registration

The algorithm must be registered in the scheduler-manager to be allowed before
being possible to use it.
