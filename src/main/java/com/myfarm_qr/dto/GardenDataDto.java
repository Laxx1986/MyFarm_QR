package com.myfarm_qr.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class GardenDataDto {
    private String kert;
    private List<String> zoldsegek;
}
