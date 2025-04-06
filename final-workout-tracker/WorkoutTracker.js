import { useState } from 'react';
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "./components/ui/table";

export default function WorkoutTracker() {
  const [search, setSearch] = useState("");
  const [weights, setWeights] = useState({});

  const data = [
    {
      week: "Week 1",
      day: "Day 1 - Upper Body + Core",
      exercise: "Dumbbell Bench Press",
      reps: "6–8",
      sets: "4",
      link: "https://workoutlabs.com/exercise-guide/dumbbell-bench-press/"
    }
  ];

  const handleWeightChange = (key, value) => {
    setWeights(prev => ({ ...prev, [key]: value }));
  };

  const filtered = data.filter(item =>
    item.exercise.toLowerCase().includes(search.toLowerCase()) ||
    item.day.toLowerCase().includes(search.toLowerCase()) ||
    item.week.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Workout Tracker</h1>
      <Input
        placeholder="Search by week, day, or exercise"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="mb-4"
      />

      <Card>
        <CardContent className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Week</TableCell>
                <TableCell>Day</TableCell>
                <TableCell>Exercise</TableCell>
                <TableCell>Reps</TableCell>
                <TableCell>Sets</TableCell>
                <TableCell>Link</TableCell>
                <TableCell>Weight Used</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((item, index) => {
                const key = `${item.week}-${item.day}-${item.exercise}`;
                return (
                  <TableRow key={index}>
                    <TableCell>{item.week}</TableCell>
                    <TableCell>{item.day}</TableCell>
                    <TableCell>{item.exercise}</TableCell>
                    <TableCell>{item.reps}</TableCell>
                    <TableCell>{item.sets}</TableCell>
                    <TableCell>
                      {item.link ? <a href={item.link} target="_blank" className="text-blue-600 underline">View</a> : "-"}
                    </TableCell>
                    <TableCell>
                      <Input
                        value={weights[key] || ""}
                        onChange={e => handleWeightChange(key, e.target.value)}
                        placeholder="kg/lbs"
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}