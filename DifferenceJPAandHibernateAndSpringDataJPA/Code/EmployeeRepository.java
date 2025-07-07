package com.cognizant.employee_info.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.employee_info.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer>{

}
