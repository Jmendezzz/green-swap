package cue.edu.co.greenswap.domain.dtos.location;

public record LocationDTO(
        String city,
        String department,
        String address,
        String zipCode,
        String comment
) {
}
