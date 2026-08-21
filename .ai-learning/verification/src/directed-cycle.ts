export interface DirectedEdge {
  from: string
  to: string
  artifact: string
}

export interface DirectedCycle {
  /**
   * Deterministic closed path, for example:
   * A -> B -> C -> A
   */
  nodes: readonly string[]

  /**
   * Artifact containing the edge that deterministically exposed the cycle.
   */
  artifact: string
}

/**
 * Returns the first cycle in deterministic lexical traversal order.
 *
 * One cycle is sufficient to establish violation of the accepted acyclicity
 * contract. The primitive deliberately does not implement SCC analysis or a
 * general graph framework.
 */
export function findDirectedCycle(
  edges: readonly DirectedEdge[],
): DirectedCycle | undefined {
  const adjacency = buildAdjacency(edges)

  const nodes = [...adjacency.keys()].sort(compareText)
  const visited = new Set<string>()
  const active = new Set<string>()
  const stack: string[] = []

  for (const node of nodes) {
    if (visited.has(node)) {
      continue
    }

    const cycle = visit(node, adjacency, visited, active, stack)

    if (cycle !== undefined) {
      return cycle
    }
  }

  return undefined
}

function buildAdjacency(
  edges: readonly DirectedEdge[],
): ReadonlyMap<string, readonly DirectedEdge[]> {
  const adjacency = new Map<string, DirectedEdge[]>()

  for (const edge of edges) {
    const outgoing = adjacency.get(edge.from)

    if (outgoing === undefined) {
      adjacency.set(edge.from, [edge])
    } else {
      outgoing.push(edge)
    }

    if (!adjacency.has(edge.to)) {
      adjacency.set(edge.to, [])
    }
  }

  for (const outgoing of adjacency.values()) {
    outgoing.sort(compareEdge)
  }

  return adjacency
}

function visit(
  node: string,
  adjacency: ReadonlyMap<string, readonly DirectedEdge[]>,
  visited: Set<string>,
  active: Set<string>,
  stack: string[],
): DirectedCycle | undefined {
  visited.add(node)
  active.add(node)
  stack.push(node)

  for (const edge of adjacency.get(node) ?? []) {
    if (!visited.has(edge.to)) {
      const cycle = visit(edge.to, adjacency, visited, active, stack)

      if (cycle !== undefined) {
        return cycle
      }

      continue
    }

    if (!active.has(edge.to)) {
      continue
    }

    const cycleStart = stack.lastIndexOf(edge.to)

    return {
      nodes: [...stack.slice(cycleStart), edge.to],
      artifact: edge.artifact,
    }
  }

  stack.pop()
  active.delete(node)

  return undefined
}

function compareEdge(left: DirectedEdge, right: DirectedEdge): number {
  return (
    compareText(left.to, right.to) || compareText(left.artifact, right.artifact)
  )
}

function compareText(left: string, right: string): number {
  if (left < right) {
    return -1
  }

  if (left > right) {
    return 1
  }

  return 0
}
