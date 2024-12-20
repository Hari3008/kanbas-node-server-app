import model from "./model.js";
export function findAssignmentsForCourse(courseId) {
    return model.find({ course: courseId });
    // const { assignments } = Database;
    // return assignments.filter((assignment) => assignment.course === courseId);

  }

  export function createAssignment(assignment) {
    // const newAssignment = { ...assignment, _id: Date.now().toString() };
    // Database.assignments = [...Database.assignments, newAssignment];
    // return newAssignment;
    delete assignment._id
    return model.create(assignment);
  }


  export function deleteAssignment(assignmentId) {
    // const { assignments } = Database;
    // Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
    return model.deleteOne({ _id: assignmentId });

   }

   export function updateAssignment(assignmentId, assignmentUpdates) {
    return model.updateOne({ _id: assignmentId }, assignmentUpdates);
    // const { assignments } = Database;
    // const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    // Object.assign(assignment, assignmentUpdates);
    // return assignment;
  }