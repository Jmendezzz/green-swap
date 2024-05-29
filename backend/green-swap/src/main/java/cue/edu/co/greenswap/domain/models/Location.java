package cue.edu.co.greenswap.domain.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class Location {
    private String city;
    private String department;
    private String address;
    private String zipCode;
    private String comment;
}
